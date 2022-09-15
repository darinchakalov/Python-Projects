import os, subprocess


def date():
    # os.system('dir')
    # return subprocess.Popen('dir', stdout=subprocess.PIPE).stdout.read()
    output = subprocess.run(['dir'], stdout=subprocess.PIPE)
    return output.stdout



date()
