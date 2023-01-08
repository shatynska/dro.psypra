<?php

namespace App\Http\Controllers;

use App\Models\Attribute;
use App\Models\Specialty;
use App\Models\Specialist;
use Illuminate\Http\Request;

class SpecialistController extends Controller
{
    public function index()
    {

        $specialists = Specialist::with('specialties')->when(request('specialty'), function ($query) {
            $query->whereRelation('specialties', 'id', request('specialty'));
        })
            ->inRandomOrder()
            ->get();

        return view('specialists.index', compact('specialists'));
    }

    public function show(Specialist $specialist)
    {
        $mainAttributes = Attribute::where('is_main_attribute', true)->get();

        return view('specialists.show', compact('specialist', 'mainAttributes'));
    }
}
