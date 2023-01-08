@props(['specialist', 'mainAttributes'])

<div>
    @foreach($mainAttributes as $mainAttribute)
            
        <div>

            <a href="{{ route('attributes.index', ['attributes' => $mainAttribute->database ]) }}" >
                <h6>
                    {{ $mainAttribute->title }}
                </h6>
            </a>

            <p class="ps-4">
                @foreach($specialist->{$mainAttribute->database} as $attributeValue)
                <a href="{{ route('attributes.show', ['attributes' => $mainAttribute->database, 'attribute' => $attributeValue->id ]) }}" >{{ $attributeValue->title }}</a>@if (!$loop->last), @endif
                @endforeach
            </p>

        </div>

    @endforeach

</div>