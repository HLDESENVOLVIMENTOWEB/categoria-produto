<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->dateTime('data_cadastro');
            $table->string('nome_produto', 150);
            $table->float('valor_produto', 10, 2);

            // Correcting the foreign key definition
            $table->unsignedInteger('id_categoria_produto');
            $table->foreign('id_categoria_produto')->references('id_categoria_planejameto')->on('categoria_produtos');

            // Index
            $table->index('id_categoria_produto');

            // Other fields and indexes...
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produtos');
    }
};
