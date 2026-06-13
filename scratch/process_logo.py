import struct
import zlib
import sys

def process_png(input_path, output_path):
    with open(input_path, 'rb') as f:
        signature = f.read(8)
        if signature != b'\x89PNG\r\n\x1a\n':
            print("Not a valid PNG file")
            sys.exit(1)
        
        chunks = []
        while True:
            length_bytes = f.read(4)
            if not length_bytes:
                break
            length, = struct.unpack('>I', length_bytes)
            chunk_type = f.read(4)
            chunk_data = f.read(length)
            crc_bytes = f.read(4)
            chunks.append((chunk_type, chunk_data))
            if chunk_type == b'IEND':
                break
                
    # Parse IHDR
    ihdr_data = None
    for chunk_type, chunk_data in chunks:
        if chunk_type == b'IHDR':
            ihdr_data = chunk_data
            break
            
    if not ihdr_data:
        print("No IHDR chunk found")
        sys.exit(1)
        
    width, height, bit_depth, color_type, compression, filter_method, interlace = struct.unpack('>IIBBBBB', ihdr_data)
    print(f"Width: {width}, Height: {height}, Bit depth: {bit_depth}, Color type: {color_type}")
    
    if color_type != 6 or bit_depth != 8:
        print("Only 8-bit RGBA PNGs are supported")
        sys.exit(1)
        
    # Concatenate all IDAT chunks
    idat_data = b''
    for chunk_type, chunk_data in chunks:
        if chunk_type == b'IDAT':
            idat_data += chunk_data
            
    decompressed = zlib.decompress(idat_data)
    
    # Unfilter scanlines
    bpp = 4
    scanline_len = 1 + width * bpp
    raw_data = bytearray(height * width * bpp)
    
    curr_pos = 0
    prior_scanline = bytearray(width * bpp)
    
    for y in range(height):
        scanline = decompressed[y * scanline_len : (y + 1) * scanline_len]
        filter_type = scanline[0]
        scanline_data = scanline[1:]
        
        curr_scanline = bytearray(width * bpp)
        
        for x in range(width * bpp):
            filt_val = scanline_data[x]
            prior_val = prior_scanline[x]
            left_val = curr_scanline[x - bpp] if x >= bpp else 0
            left_prior_val = prior_scanline[x - bpp] if x >= bpp else 0
            
            if filter_type == 0: # None
                raw_val = filt_val
            elif filter_type == 1: # Sub
                raw_val = (filt_val + left_val) & 255
            elif filter_type == 2: # Up
                raw_val = (filt_val + prior_val) & 255
            elif filter_type == 3: # Average
                raw_val = (filt_val + (left_val + prior_val) // 2) & 255
            elif filter_type == 4: # Paeth
                p = left_val + prior_val - left_prior_val
                pa = abs(p - left_val)
                pb = abs(p - prior_val)
                pc = abs(p - left_prior_val)
                if pa <= pb and pa <= pc:
                    pred = left_val
                elif pb <= pc:
                    pred = prior_val
                else:
                    pred = left_prior_val
                raw_val = (filt_val + pred) & 255
            else:
                raw_val = filt_val
                
            curr_scanline[x] = raw_val
            
        raw_data[y * width * bpp : (y + 1) * width * bpp] = curr_scanline
        prior_scanline = curr_scanline

    # Recoloring dark text pixels (R < 120, G < 120, B < 120, A > 10) to white (255, 255, 255, A)
    for i in range(0, len(raw_data), 4):
        r, g, b, a = raw_data[i], raw_data[i+1], raw_data[i+2], raw_data[i+3]
        if a > 10:
            if r < 120 and g < 120 and b < 120:
                raw_data[i] = 255
                raw_data[i+1] = 255
                raw_data[i+2] = 255

    # Re-encode as PNG with Filter 0 (None)
    new_decompressed = bytearray()
    for y in range(height):
        new_decompressed.append(0) # Filter type 0
        new_decompressed.extend(raw_data[y * width * bpp : (y + 1) * width * bpp])
        
    new_idat_data = zlib.compress(new_decompressed)
    
    with open(output_path, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        # Write IHDR
        f.write(struct.pack('>I', 13))
        f.write(b'IHDR')
        ihdr_payload = struct.pack('>IIBBBBB', width, height, bit_depth, color_type, compression, filter_method, interlace)
        f.write(ihdr_payload)
        f.write(struct.pack('>I', zlib.crc32(b'IHDR' + ihdr_payload)))
        
        # Write other chunks
        for chunk_type, chunk_data in chunks:
            if chunk_type not in (b'IHDR', b'IDAT', b'IEND'):
                f.write(struct.pack('>I', len(chunk_data)))
                f.write(chunk_type)
                f.write(chunk_data)
                f.write(struct.pack('>I', zlib.crc32(chunk_type + chunk_data)))
                
        # Write new IDAT
        f.write(struct.pack('>I', len(new_idat_data)))
        f.write(b'IDAT')
        f.write(new_idat_data)
        f.write(struct.pack('>I', zlib.crc32(b'IDAT' + new_idat_data)))
        
        # Write IEND
        f.write(struct.pack('>I', 0))
        f.write(b'IEND')
        f.write(struct.pack('>I', zlib.crc32(b'IEND')))

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python process_logo.py input.png output.png")
        sys.exit(1)
    process_png(sys.argv[1], sys.argv[2])
