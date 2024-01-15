<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Contracts\CategoriaProdutoRepositoryInterface;
use App\Repositories\CategoriaProdutoRepository;

use App\Repositories\Contracts\ProdutoRepositoryInterface;
use App\Repositories\ProdutoRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            CategoriaProdutoRepositoryInterface::class,
            CategoriaProdutoRepository::class,
        );

        $this->app->bind(
            ProdutoRepositoryInterface::class,
            ProdutoRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
