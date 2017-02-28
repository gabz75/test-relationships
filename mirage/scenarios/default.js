export default function(server) {
  for (var i = 0; i < 10; i++) {
    const appointment = server.create('appointment');
    const user = server.create('user', { appointments: [appointment] });
    server.create('car', { user });
  }
}
