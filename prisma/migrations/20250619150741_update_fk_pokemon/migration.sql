-- DropForeignKey
ALTER TABLE "pokemon" DROP CONSTRAINT "pokemon_fk_tipo_primario_fkey";

-- DropForeignKey
ALTER TABLE "pokemon" DROP CONSTRAINT "pokemon_fk_tipo_secundario_fkey";

-- AlterTable
ALTER TABLE "pokemon" ALTER COLUMN "fk_tipo_primario" SET DATA TYPE TEXT,
ALTER COLUMN "fk_tipo_secundario" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_fk_tipo_primario_fkey" FOREIGN KEY ("fk_tipo_primario") REFERENCES "tipo"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_fk_tipo_secundario_fkey" FOREIGN KEY ("fk_tipo_secundario") REFERENCES "tipo"("name") ON DELETE SET NULL ON UPDATE CASCADE;
