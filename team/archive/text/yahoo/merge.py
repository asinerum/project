## pip install PyPDF2

import sys
from PyPDF2 import PdfMerger

args = sys.argv
if(len(args)<4):
  sys.exit("Files are missing")
target = args[1]
pdfs = []
for n in range(2, len(args)):
  pdfs.append(args[n])

merger = PdfMerger()
try:
  for pdf in pdfs:
    merger.append(open(pdf, 'rb'))
  with open(target, 'wb') as fileout:
    merger.write(fileout)
except Exception as e:
  print(f"Error occurred: {e}")
merger.close()

print(f"Merged file has been created: {target}")
