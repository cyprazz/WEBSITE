#! /usr/bin/python3

import logging
import sys
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/diegorolf.nl/')
from website import app as application
application.secret_key = "YouWon'tGuess"
