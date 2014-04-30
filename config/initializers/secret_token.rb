# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
PoCAuthentication::Application.config.secret_key_base = '6bed0be49c8a4305e9534eb31e1b9f07aa0cb8904cdd866341ccadc1144922393d57daaa7cf3758b1c3bd5ff51c69af1392d928f5c88ac055b71c16864f8b424'
