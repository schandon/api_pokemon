export interface IPokemon {
  id: string;
  name: string;
  fk_tipo_primario: string;
  fk_tipo_secundario?: string;
}
