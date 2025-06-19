/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `tipo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tipo_name_key" ON "tipo"("name");
