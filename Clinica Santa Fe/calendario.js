document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');
    const calendar = document.getElementById('calendar');
    
    // Crear días del calendario
    createCalendarDays();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const doctor = document.getElementById('doctor').value;
        const specialty = document.getElementById('specialty').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Crear un identificador único para la cita
        const appointmentId = `${date}_${time}`;

        // Verificar si ya existe una cita en esa fecha y hora
        if (document.getElementById(appointmentId)) {
            alert('Ya existe una cita programada para esta fecha y hora.');
            return;
        }

        // Agregar cita al calendario
        const appointment = document.createElement('div');
        appointment.classList.add('calendar-day', 'occupied');
        appointment.id = appointmentId;
        appointment.innerHTML = `
            <h3>${date}</h3>
            <p>${time}</p>
            <p>${doctor}</p>
            <p>${specialty}</p>
        `;

        calendar.appendChild(appointment);
    });

    function createCalendarDays() {
        // Crear un ejemplo de 30 días en el calendario
        for (let i = 1; i <= 30; i++) {
            const day = document.createElement('div');
            day.classList.add('calendar-day');
            day.innerHTML = `<h3>Día ${i}</h3>`;
            calendar.appendChild(day);
        }
    }
});