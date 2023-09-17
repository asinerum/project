import sys
import json
try:
  name = json.loads(sys.argv[1])['who']
except:
  name = "Unknown"
print("Hello %s from Python" % name)
