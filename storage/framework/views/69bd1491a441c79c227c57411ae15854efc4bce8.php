<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag; ?>
<?php foreach($attributes->onlyProps(['specialist', 'mainAttributes']) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $attributes = $attributes->exceptProps(['specialist', 'mainAttributes']); ?>
<?php foreach (array_filter((['specialist', 'mainAttributes']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $__defined_vars = get_defined_vars(); ?>
<?php foreach ($attributes as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
} ?>
<?php unset($__defined_vars); ?>

<div>
    <?php $__currentLoopData = $mainAttributes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mainAttribute): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            
        <div>

            <a href="<?php echo e(route('attributes.index', ['attributes' => $mainAttribute->database ])); ?>" >
                <h6>
                    <?php echo e($mainAttribute->title); ?>

                </h6>
            </a>

            <p class="ps-4">
                <?php $__currentLoopData = $specialist->{$mainAttribute->database}; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $attributeValue): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <a href="<?php echo e(route('attributes.show', ['attributes' => $mainAttribute->database, 'attribute' => $attributeValue->id ])); ?>" ><?php echo e($attributeValue->title); ?></a><?php if(!$loop->last): ?>, <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </p>

        </div>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div><?php /**PATH /var/www/dro.psypra.com/current/resources/views/components/main-attributes.blade.php ENDPATH**/ ?>