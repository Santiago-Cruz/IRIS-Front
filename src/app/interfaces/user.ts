export interface User{
    _id?: string;
    TipoId: string;
    Id: string; 
    Nombres: string;
    Apellidos: string;
    Nacimiento: Date;
    Edad: string;
    Email: string;
    Celular: string;
    Estado: boolean;
    createdAt?: Date;
}