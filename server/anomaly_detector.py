import sys
import random

lat = float(sys.argv[1])
lng = float(sys.argv[2])

# Delhi boundary + random anomaly
if random.random() < 0.2 or not (28.5 < lat < 28.9 and 77.0 < lng < 77.4):
    print("anomaly")
else:
    print("normal")
