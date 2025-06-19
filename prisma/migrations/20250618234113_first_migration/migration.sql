-- CreateTable
CREATE TABLE "pokemon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fk_tipo_primario" TEXT NOT NULL,
    "fk_tipo_secundario" TEXT,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tipo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_fk_tipo_primario_fkey" FOREIGN KEY ("fk_tipo_primario") REFERENCES "tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_fk_tipo_secundario_fkey" FOREIGN KEY ("fk_tipo_secundario") REFERENCES "tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
