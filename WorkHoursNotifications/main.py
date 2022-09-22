from xml.etree.ElementTree import tostring
from plyer import notification
from datetime import datetime
from datetime import time

# start = datetime.strptime("08:30:00", "%H:%M:%S")
start = time.fromisoformat('08:00:00')
now = datetime.now().strftime("%H:%M:%S")


start_time = start.strftime("%H:%M:%S")


def time_formatter(start_time, end_time):
    start_hours, start_minutes, start_seconds = start_time.split(':')
    end_hours, end_minutes, end_seconds = end_time.split(':')

    # print(int(end_hours)-int(start_hours))
    return f'{(int(end_hours)-int(start_hours))}:{(int(end_minutes)-int(start_minutes))}'


def percentage_calculator():
    hours_passed, minutes_passed = time_formatter(start_time, now).split(":")
    time_passed = float(f'{hours_passed}.{minutes_passed}')
    return time_passed / 8.0 * 100


def main():
    notification.notify(
        title=f'{time_formatter(start_time, now)} from the beginning of the shift',
        message=f'Percentage passed: {percentage_calculator()}',
        app_name='Here is the application name',
        # app_icon='/icon.png'
    )
    pass


main()
