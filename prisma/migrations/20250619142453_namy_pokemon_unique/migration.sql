/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pokemon_name_key" ON "pokemon"("name");
