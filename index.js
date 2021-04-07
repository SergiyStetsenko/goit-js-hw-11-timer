const daysMark = document.querySelector('[data-value="days"]')
const hoursMark = document.querySelector('[data-value="hours"]')
const minsMark = document.querySelector('[data-value="mins"]')
const secsMark = document.querySelector('[data-value="secs"]')

class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    createCountdownTimer() {
        const nowDate = new Date(this.targetDate).getTime();
        function pad(value) {
            return String(value).padStart(2, '0');
        }
        setInterval(() => {
            const date = Date.now();
  
            const deltaTime = nowDate - date
            if (deltaTime < 0) {
                daysMark.textContent = '00';
                hoursMark.textContent = '00';
                minsMark.textContent = '00';
                secsMark.textContent = '00';
                return
            }
            const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
            const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
            const hours = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const days = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
            daysMark.textContent = days
            hoursMark.textContent = hours
            minsMark.textContent = mins
            secsMark.textContent = secs
        }, 1000)
    }
}
const timer = new CountdownTimer('#timer-1','Jul 13, 2021')
timer.createCountdownTimer()

