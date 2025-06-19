export interface IPokemon {
  id: number;
  name: string;
  fk_tipo_primario: string;
  fk_tipo_secundario?: string | null;
}
