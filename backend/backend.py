import sys
from pathlib import Path

# Allow 'backend.main' imports when working directory is already inside 'backend'
__path__ = [str(Path(__file__).resolve().parent)]

_PROJECT_ROOT = str(Path(__file__).resolve().parent.parent)
if _PROJECT_ROOT not in sys.path:
    sys.path.insert(0, _PROJECT_ROOT)
