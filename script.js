var $background = document.getElementById('demo-background');
var $backgroundAlpha = document.getElementById('demo-background-alpha');
var $foreground = document.getElementById('demo-foreground');
var $foregroundAlpha = document.getElementById('demo-foreground-alpha');
var $level = document.getElementById('demo-level');
var $padding = document.getElementById('demo-padding');
var $size = document.getElementById('demo-size');
var $value = document.getElementById('demo-value');

var qr = window.qr = new QRious({
  element: document.getElementById('qrious'),
  size: 250,
  value: 'sasuke.me'
});

$background.addEventListener('change', function() {
  qr.background = $background.value || null;
});

$backgroundAlpha.addEventListener('change', function() {
  qr.backgroundAlpha = $backgroundAlpha.value || null;
});

$foreground.addEventListener('change', function() {
  qr.foreground = $foreground.value || null;
});

$foregroundAlpha.addEventListener('change', function() {
  qr.foregroundAlpha = $foregroundAlpha.value || null;
});

$level.addEventListener('change', function() {
  qr.level = $level.value;
});

$padding.addEventListener('change', function() {
  if ($padding.validity.valid) {
    qr.padding = $padding.value !== '' ? $padding.value : null;
  }
});

$size.addEventListener('change', function() {
  if (!$size.validity.valid) {
    return;
  }

  qr.size = $size.value || null;
});

$value.value = 'sasuke.me';
$value.addEventListener('input', function() {
  qr.value = $value.value;
});