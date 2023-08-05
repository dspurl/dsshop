<?php
/** +----------------------------------------------------------------------
 * | DSSHOP [ 轻量级易扩展低代码开源商城系统 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2020~2023 https://www.dswjcms.com All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed 未经许可不能去掉DSSHOP相关版权
 * +----------------------------------------------------------------------
 * | Author: Purl <383354826@qq.com>
 * +----------------------------------------------------------------------
 */

namespace App\Http\Requests\v1;

use App\Http\Requests\Request;

class SubmitRegionRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        switch ($this->method()) {
            case 'POST':
                return true;
            case 'GET':
            default:
            {
                return false;
            }
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $request = Request::all();
        switch ($this->method()) {
            case 'POST':    //create
                if (Request::has('id')) {   //更新
                    return [
                        'name' => 'required|string|max:200',
                        'value' => 'nullable|string|max:100',
                        'parent_id' => 'nullable|integer',
                    ];
                } else {
                    return [
                        'name' => 'required|string|max:200',
                        'value' => 'nullable|string|max:100',
                        'parent_id' => 'nullable|integer',
                    ];
                }
            case 'GET':
            default:
            {
                return [];
            }
        }
    }

    public function messages()
    {
        return [
            'name.required' => __('hint.error.not_null', ['attribute' => __('region.name')]),
            'name.string' => __('hint.error.wrong_format', ['attribute' => __('region.name')]),
            'name.max' => __('hint.error.max', ['attribute' => __('region.name'), 'place' => 200]),
            'parent_id.integer' => __('hint.error.wrong_format', ['attribute' => __('region.parent_name')]),
            'value.string' => __('hint.error.wrong_format', ['attribute' => __('region.value')]),
            'value.max' => __('hint.error.max', ['attribute' => __('region.value'), 'place' => 100]),
        ];
    }
}