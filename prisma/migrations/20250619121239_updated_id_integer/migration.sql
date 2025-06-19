/*
  Warnings:

  - The primary key for the `pokemon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `fk_tipo_secundario` column on the `pokemon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tipo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `pokemon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fk_tipo_primario` on the `pokemon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `tipo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "pokemon" DROP CONSTRAINT "pokemon_fk_tipo_primario_fkey";

-- DropForeignKey
ALTER TABLE "pokemon" DROP CONSTRAINT "pokemon_fk_tipo_secundario_fkey";

-- AlterTable
ALTER TABLE "pokemon" DROP CONSTRAINT "pokemon_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "fk_tipo_primario",
ADD COLUMN     "fk_tipo_primario" INTEGER NOT NULL,
DROP COLUMN "fk_tipo_secundario",
ADD COLUMN     "fk_tipo_secundario" INTEGER,
ADD CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tipo" DROP CONSTRAINT "tipo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "tipo_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_fk_tipo_primario_fkey" FOREIGN KEY ("fk_tipo_primario") REFERENCES "tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_fk_tipo_secundario_fkey" FOREIGN KEY ("fk_tipo_secundario") REFERENCES "tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
