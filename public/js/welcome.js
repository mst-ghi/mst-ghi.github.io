;(function () {
  'use strict'

  if (!window.console) return

  var c = window.console
  var font = 'font-family: Segoe UI, Ubuntu, Helvetica, Arial, sans-serif;'
  var pink = '#fc72ff'
  var ink = '#0a0b0d'

  // Plain-text greeting — renders cleanly in any console or terminal
  c.log('')
  c.log("  Hi there! I'm Mostafa Gholami - Senior Full-Stack Developer")
  c.log('  NestJS - Next.js - Golang - Turborepo')
  c.log('  Let\'s build something great -> mostafagholamidev@gmail.com')
  c.log('')

  // Branded accent for consoles that support %c styling
  c.log(
    '%cPortfolio: mst-ghi.github.io',
    'background:' + pink + ';color:' + ink + ';padding:4px 10px;border-radius:6px;font-weight:700;' + font
  )
})()