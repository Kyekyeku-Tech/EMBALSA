function getGreeting() {
        const hours = new Date().getHours();
        if (hours < 12) return "Good morning";
        if (hours < 18) return "Good afternoon";
        return "Good evening";
    }

    function getQuarterAndMonth() {
        const month = new Date().getMonth();
        const quarters = ["QUARTER ONE", "QUARTER TWO", "QUARTER THREE", "QUARTER FOUR"];
        const quarter = quarters[Math.floor(month / 3)];
        const monthNames = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        return { quarter, month: monthNames[month] };
    }
    function getCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
}


   function displayGreeting() {
    const greeting = getGreeting();
    const { quarter, month } = getQuarterAndMonth();
    const currentDate = getCurrentDate();

    document.getElementById("greeting").textContent = `${greeting}, User!!`;
    document.getElementById("quarter").textContent = `WE'RE IN ${quarter}`;
    document.getElementById("month").textContent = `~ ${currentDate} ~`;

    const notificationButton = document.getElementById("notification");
    notificationButton.addEventListener("click", () => {
        alert("Hello! please, Kindly Report Today Before You Close. Thank You.");
    });
}


    window.onload = displayGreeting;