import bcrypt

password = b"Shiva@123"

hashed = bcrypt.hashpw(password, bcrypt.gensalt())

print(hashed)