"""Build-time Brotli storage using the repository's required Node runtime."""
import subprocess


def compress_source(data: bytes) -> bytes:
    script = """
const fs = require('node:fs');
const { brotliCompressSync, brotliDecompressSync, constants } = require('node:zlib');
const source = fs.readFileSync(0);
const compressed = brotliCompressSync(source, {
  params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
});
if (!brotliDecompressSync(compressed).equals(source)) throw new Error('Source round-trip mismatch');
process.stdout.write(compressed);
"""
    return subprocess.run(['node', '-e', script], input=data,
                          stdout=subprocess.PIPE, check=True).stdout
