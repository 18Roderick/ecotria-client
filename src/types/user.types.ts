export interface User {
  _id: string;
  photoProfile?: string;
  following?: this[];
  followers?: this[];
  nombre: string;
  provincia?: string;
  apellido: string;
  contrasena?: string;
  sexo?: string;
  role_user?: string;
  numero_contactar?: Date;
  correo: string;
  fecha_creacion?: Date;
  fecha_actualizacion?: Date;
  ultima_conexion?: Date;
  rubro?: unknown;
  sobre_mi?: string;
  sector?: string;
  estado?: boolean;
  perfil?: string;
}
