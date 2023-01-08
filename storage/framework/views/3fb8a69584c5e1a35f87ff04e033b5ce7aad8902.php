<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag; ?>
<?php foreach($attributes->onlyProps(['specialist', 'attributess']) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $attributes = $attributes->exceptProps(['specialist', 'attributess']); ?>
<?php foreach (array_filter((['specialist', 'attributess']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $__defined_vars = get_defined_vars(); ?>
<?php foreach ($attributes as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
} ?>
<?php unset($__defined_vars); ?>

<div>
    <?php $__currentLoopData = $attributess; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $attributesItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    
    <?php 
        $database = $attributesItem->database;
        ?>

        <div>

            <a href="<?php echo e(route('attributes.index', ['attributes' => $database ])); ?>" >
                <h6>
                    <?php echo e($attributesItem->title); ?>

                </h6>
            </a>

            <p class="ps-4">
                <?php $__currentLoopData = $specialist->$database; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $attribute): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <a href="<?php echo e(route('attributes.show', ['attributes' => $database, 'attribute' => $attribute->id ])); ?>" ><?php echo e($attribute->title); ?></a><?php if(!$loop->last): ?>, <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </p>

        </div>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div><?php /**PATH /var/www/dro.psypra.com/current/resources/views/components/basic-attributes.blade.php ENDPATH**/ ?>