<x-layout>

{{-- name and specialty --}}
<div class="row">
    <div class="col">
        <h3 class="secondary-color ps-4">
            @foreach($specialist->specialties as $specialty)
            {{ $specialty->title }}@if (!$loop->last), @endif
            @endforeach
        </h3>
        <h1>
            {{ $specialist->name }} {{ $specialist->last_name }}
        </h1>
    </div>
</div>

<div class="row">
    {{-- image --}}
    <div class="col-md-6 col-xl-4 my-4">
        @if($specialist->user->getFirstMediaUrl('big_photos', 'big'))
            <img src="{{ $specialist->user->getFirstMediaUrl('big_photos', 'big') }}" alt="" class="img-fluid my-2">
        @endif
        
    </div>
    <div class="col-md-6 col-xl-4 my-4">

        <x-main-attributes :$specialist :$mainAttributes />
        
    </div>

    {{-- contacts --}}
    <div class="col-md-6 col-xl-4 my-4">
        <div class="my-2 d-flex gap-4">
            <a href="">
                <img src={{ asset('images/programs/messenger.png') }} alt="">
            </a>
            <a href="">
                <img src={{ asset('images/programs/telegram.png') }} alt="">
            </a>
            <a href="">
                <img src={{ asset('images/programs/zoom.png') }} alt="">
            </a>
            <a href="">
                <img src={{ asset('images/programs/skype.png') }} alt="">
            </a>

        </div>
        <div class="my-4">
            <h2 class="primary-color">+380978976847</h2>
        </div>
    </div>

</div>


</x-layout>


