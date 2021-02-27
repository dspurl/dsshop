<?php

namespace App\Console\Commands;

use App\Models\v1\GoodIndent;
use Illuminate\Console\Command;

class OrderInvalidationHandling extends Command
{
    /**
     * 订单失效处理
     *
     * @var string
     */
    protected $signature = 'order:invalidation';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Order invalidation handling。';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     *
     * @return void
     */
    public function handle()
    {
        $overTime = config('dswjcms.indentOvertime');
        $GoodIndentAll=GoodIndent::where('state', GoodIndent::GOOD_INDENT_STATE_PAY)
            ->whereRaw('TIMESTAMPDIFF(MINUTE,created_at,now())>'.$overTime)->get();
        if($GoodIndentAll){
            foreach ($GoodIndentAll as $g){
                $GoodIndent = GoodIndent::with(['goodsList'])->find($g->id);
                $GoodIndent->state = GoodIndent::GOOD_INDENT_STATE_FAILURE;
                $GoodIndent->save();
            }
        }
    }
}
