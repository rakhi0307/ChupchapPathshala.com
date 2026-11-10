
/*
 * ChupChap Pathshala — Launch Settings
 * Launch: 12 December 2026, 12:00 AM Bangladesh Time (UTC+06:00)
 */

const SITE_CONFIG = {
  GOOGLE_FORM_URL: "https://forms.gle/XpNNxMBjiLqJwowV7",
  LAUNCH_AT: "2026-12-12T00:00:00+06:00"
};

// Google Form links
document.querySelectorAll('a[href*="forms.gle"]').forEach((link) => {
  link.href = SITE_CONFIG.GOOGLE_FORM_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "মেনু খুলুন");
    });
  });
}

// Launch Countdown
const launchTime = Date.parse(SITE_CONFIG.LAUNCH_AT);

const timeParts = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

const countdownTitle = document.getElementById("countdown-title");
const countdownDescription = document.getElementById("countdown-description");
const countdownKicker = document.querySelector(".countdown-kicker");

const countdownDigits = (number) =>
  String(number)
    .padStart(2, "0")
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

let countdownInterval = null;

function updateCountdown() {
  // Check target date
  if (!Number.isFinite(launchTime)) {
    if (countdownTitle) {
      countdownTitle.textContent = "লঞ্চের তারিখ সেট করা যাচ্ছে না";
    }
    return;
  }

  // Calculate remaining time in milliseconds
  const remainingMs = launchTime - Date.now();

  // Launch completed
  if (remainingMs <= 0) {
    Object.values(timeParts).forEach((element) => {
      if (element) element.textContent = "০০";
    });

    if (countdownKicker) {
      countdownKicker.textContent = "WE ARE LIVE";
    }

    if (countdownTitle) {
      countdownTitle.textContent =
        "আজ থেকেই শুরু আমাদের নতুন পাঠযাত্রা!";
    }

    if (countdownDescription) {
      countdownDescription.textContent =
        "চুপচাপ পাঠশালায় আপনাকে স্বাগতম। এখনই Early Bird Registration করুন।";
    }

    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }

    return;
  }

  // Convert the remaining time into one consistent total-second value
  const totalSeconds = Math.floor(remainingMs / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor(
    (totalSeconds % 86400) / 3600
  );

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds = totalSeconds % 60;

  // Update countdown display
  if (timeParts.days) {
    timeParts.days.textContent = countdownDigits(days);
  }

  if (timeParts.hours) {
    timeParts.hours.textContent = countdownDigits(hours);
  }

  if (timeParts.minutes) {
    timeParts.minutes.textContent = countdownDigits(minutes);
  }

  if (timeParts.seconds) {
    timeParts.seconds.textContent = countdownDigits(seconds);
  }
}

// Run immediately when page loads
updateCountdown();

// Update every second
if (countdownInterval === null) {
  countdownInterval = setInterval(updateCountdown, 1000);
}
