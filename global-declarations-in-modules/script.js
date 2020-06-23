function log(msg) {
  document.getElementById('out').textContent += msg + '\n';
}

log('from script:');

try {
  log('window.a = ' + a);
} catch (error) {
  log('window.a = ' + error);
}

try {
  log('var b = ' + b);
} catch (error) {
  log('var b = ' + error);
}

try {
  log('let c = ' + c);
} catch (error) {
  log('let c = ' + error);
}
