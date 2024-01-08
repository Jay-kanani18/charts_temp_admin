import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        weekends: true,
        events: [
            { title: 'Meeting with UI/UX Designers', date: '2024-02-12' },
            { title: 'Call for payment Project NOK', date: '2024-02-06' },
            { title: 'Picnic with my Family', date: '2024-02-21' },
            { title: 'Project Work with Developers', date: '2024-02-15' },
            { title: 'Meeting with Developers', date: '2024-02-09' },
            { title: 'Consultation with Doctor', date: '2024-02-17' },
            { title: 'Consultation with Employees', date: '2024-02-04' },
            { title: 'Meeting with UI/UX Designers', date: '2024-01-12' },
            { title: 'Call for payment Project NOK', date: '2024-01-06' },
            { title: 'Picnic with my Family', date: '2024-01-21' },
            { title: 'Project Work with Developers', date: '2024-01-15' },
            { title: 'Meeting with Developers', date: '2024-01-01' },
            { title: 'Consultation with Doctor', date: '2024-01-17' },
            { title: 'Consultation with Employees', date: '2024-01-04' },
            { title: 'Meeting with UI/UX Designers', date: '2024-01-12' },
            { title: 'Call for payment Project NOK', date: '2024-01-06' },
            { title: 'Picnic with my Family', date: '2024-01-21' },
            { title: 'Project Work with Developers', date: '2024-01-15' },
            { title: 'Meeting with Developers', date: '2024-01-01' },
            { title: 'Consultation with Doctor', date: '2024-03-17' },
            { title: 'Consultation with Employees', date: '2024-03-04' },
            { title: 'Meeting with UI/UX Designers', date: '2024-11-12' },
            { title: 'Call for payment Project NOK', date: '2024-11-06' },
            { title: 'Picnic with my Family', date: '2024-03-21' },
            { title: 'Project Work with Developers', date: '2024-03-15' },
            { title: 'Meeting with Developers', date: '2024-03-09' },
            { title: 'Consultation with Doctor', date: '2024-12-17' },
            { title: 'Consultation with Employees', date: '2024-12-04' },
        ],
        plugins: [dayGridPlugin]
    };

    constructor(
        public dialog: MatDialog
    ) {}

    openAddEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(AddEventDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'add-event-dialog',
    templateUrl: './add-event-dialog.html',
})
export class AddEventDialogBox {

    constructor(
        public dialogRef: MatDialogRef<AddEventDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}