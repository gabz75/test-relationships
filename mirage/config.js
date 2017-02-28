export default function() {
  this.get('/cars');
  this.get('/users/:id');
  this.get('/appointments/:id');
}
