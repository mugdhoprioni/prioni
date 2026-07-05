{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', function () \{\
\
  const loveQuotes = [\
    \{ text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Bronte" \},\
    \{ text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Maya Angelou" \},\
    \{ text: "Love recognizes no barriers. It jumps hurdles, leaps fences.", author: "Maya Angelou" \},\
    \{ text: "So it's true, when all is lost, hope survives in memory.", author: "Nicholas Sparks" \},\
    \{ text: "The best love is the kind that awakens the soul.", author: "Nicholas Sparks" \},\
    \{ text: "Doubt thou the stars are fire, but never doubt I love.", author: "William Shakespeare" \},\
    \{ text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" \},\
    \{ text: "Distance means so little when someone means so much.", author: "Unknown" \},\
    \{ text: "Being deeply loved gives you strength; loving deeply gives you courage.", author: "Lao Tzu" \},\
    \{ text: "You know you're in love when you can't fall asleep because reality is better than dreams.", author: "Dr. Seuss" \},\
    \{ text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" \},\
    \{ text: "The heart wants what it wants; there's no logic to these things.", author: "Woody Allen" \},\
    \{ text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" \},\
    \{ text: "Grow old with me, the best is yet to be.", author: "Robert Browning" \},\
    \{ text: "Love does not consist of gazing at each other, but looking outward together.", author: "Antoine de Saint-Exupery" \}\
  ];\
\
  const gatekeeper = document.getElementById('gatekeeper');\
  const mainContent = document.getElementById('mainContent');\
  const gateForm = document.getElementById('gateForm');\
  const nameInput = document.getElementById('nameInput');\
  const errorMessage = document.getElementById('errorMessage');\
  const gatekeeperHearts = document.getElementById('gatekeeperHearts');\
  const heartsBackground = document.getElementById('heartsBackground');\
  const quoteText = document.getElementById('quoteText');\
  const quoteAuthor = document.getElementById('quoteAuthor');\
  const newQuoteBtn = document.getElementById('newQuoteBtn');\
\
  const playfulErrors = [\
    "Hmm, that's not quite right. Try again, love \uc0\u55357 \u56469 ",\
    "Nice try, but this door only opens for one special person.",\
    "Not the right name... unless you're hiding your identity? \uc0\u55357 \u56384 ",\
    "Access denied! Only one name unlocks this heart.",\
    "Almost! But this site knows exactly who it's looking for."\
  ];\
\
  function showRandomQuote() \{\
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);\
    const chosen = loveQuotes[randomIndex];\
    quoteText.style.opacity = 0;\
    quoteAuthor.style.opacity = 0;\
    setTimeout(function () \{\
      quoteText.textContent = '"' + chosen.text + '"';\
      quoteAuthor.textContent = '\'97 ' + chosen.author;\
      quoteText.style.opacity = 1;\
      quoteAuthor.style.opacity = 1;\
    \}, 200);\
  \}\
\
  function createFloatingHeart(container, isGatekeeper) \{\
    const heart = document.createElement('div');\
    heart.classList.add('floating-heart');\
    const symbols = ['\uc0\u10084 ', '\u55357 \u56469 ', '\u55357 \u56470 ', '\u55357 \u56471 ', '\u9825 '];\
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];\
\
    const startLeft = Math.random() * 100;\
    const duration = 8 + Math.random() * 10;\
    const size = 14 + Math.random() * 22;\
    const delay = Math.random() * 5;\
\
    heart.style.left = startLeft + 'vw';\
    heart.style.fontSize = size + 'px';\
    heart.style.animationDuration = duration + 's';\
    heart.style.animationDelay = delay + 's';\
    heart.style.opacity = 0.4 + Math.random() * 0.5;\
\
    container.appendChild(heart);\
\
    setTimeout(function () \{\
      if (heart.parentNode === container) \{\
        container.removeChild(heart);\
      \}\
    \}, (duration + delay) * 1000 + 500);\
  \}\
\
  function startHeartLoop(container, intervalMs) \{\
    for (let i = 0; i < 6; i++) \{\
      setTimeout(function () \{\
        createFloatingHeart(container);\
      \}, i * 400);\
    \}\
    return setInterval(function () \{\
      createFloatingHeart(container);\
    \}, intervalMs);\
  \}\
\
  let gatekeeperHeartInterval = startHeartLoop(gatekeeperHearts, 900);\
  let mainHeartInterval = null;\
\
  gateForm.addEventListener('submit', function (e) \{\
    e.preventDefault();\
    const value = nameInput.value.trim().toLowerCase();\
\
    if (value === 'prioni') \{\
      errorMessage.textContent = '';\
      gatekeeper.classList.add('fade-out');\
\
      setTimeout(function () \{\
        clearInterval(gatekeeperHeartInterval);\
        gatekeeper.style.display = 'none';\
        mainContent.classList.remove('hidden');\
\
        requestAnimationFrame(function () \{\
          mainContent.classList.add('visible');\
        \});\
\
        showRandomQuote();\
        mainHeartInterval = startHeartLoop(heartsBackground, 700);\
      \}, 900);\
\
    \} else \{\
      const randomError = playfulErrors[Math.floor(Math.random() * playfulErrors.length)];\
      errorMessage.textContent = randomError;\
      errorMessage.classList.remove('shake');\
      void errorMessage.offsetWidth;\
      errorMessage.classList.add('shake');\
      nameInput.value = '';\
      nameInput.focus();\
    \}\
  \});\
\
  newQuoteBtn.addEventListener('click', function () \{\
    showRandomQuote();\
  \});\
\
  const timelineItems = document.querySelectorAll('.timeline-item');\
  if ('IntersectionObserver' in window) \{\
    const observer = new IntersectionObserver(function (entries) \{\
      entries.forEach(function (entry) \{\
        if (entry.isIntersecting) \{\
          entry.target.classList.add('in-view');\
        \}\
      \});\
    \}, \{ threshold: 0.25 \});\
\
    timelineItems.forEach(function (item) \{\
      observer.observe(item);\
    \});\
  \} else \{\
    timelineItems.forEach(function (item) \{\
      item.classList.add('in-view');\
    \});\
  \}\
\
\});}