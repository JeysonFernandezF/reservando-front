export interface RequestAppointments {
  message: string;
  data:    { [key: string]: string[] };
}

export interface TimeDiponibility{
  [date: string]: string[] ;
}
