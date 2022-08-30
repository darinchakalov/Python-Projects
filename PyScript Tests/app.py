# f = open('readme.txt', 'r')
# print(f.read())

f = open('readme.txt', 'a')

f.write('\nNew line')
f.close()


f = open('readme.txt', 'r')
print(f.read())