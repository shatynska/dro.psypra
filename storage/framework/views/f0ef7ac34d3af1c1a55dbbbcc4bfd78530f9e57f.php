<?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.layout','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>


<div class="row">
    <div class="col">
        <h3 class="secondary-color ps-4">
            <?php $__currentLoopData = $specialist->specialties; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $specialty): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php echo e($specialty->title); ?><?php if(!$loop->last): ?>, <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </h3>
        <h1>
            <?php echo e($specialist->name); ?> <?php echo e($specialist->last_name); ?>

        </h1>
    </div>
</div>

<div class="row">
    
    <div class="col-md-6 col-xl-4 my-4">
        <?php (dd($specialist->user->getFirstMediaUrl('big_photos', 'big'))); ?>
        <?php if($specialist->user->getFirstMediaUrl('big_photos', 'big')): ?>
            <img src="<?php echo e($specialist->user->getFirstMediaUrl('big_photos', 'big')); ?>" alt="" class="img-fluid my-2">
        <?php endif; ?>
        
    </div>
    <div class="col-md-6 col-xl-4 my-4">

        <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.main-attributes','data' => ['specialist' => $specialist,'mainAttributes' => $mainAttributes]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('main-attributes'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['specialist' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($specialist),'mainAttributes' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($mainAttributes)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
        
    </div>

    
    <div class="col-md-6 col-xl-4 my-4">
        <div class="my-2 d-flex gap-4">
            <a href="">
                <img src=<?php echo e(asset('images/programs/messenger.png')); ?> alt="">
            </a>
            <a href="">
                <img src=<?php echo e(asset('images/programs/telegram.png')); ?> alt="">
            </a>
            <a href="">
                <img src=<?php echo e(asset('images/programs/zoom.png')); ?> alt="">
            </a>
            <a href="">
                <img src=<?php echo e(asset('images/programs/skype.png')); ?> alt="">
            </a>

        </div>
        <div class="my-4">
            <h2 class="primary-color">+380978976847</h2>
        </div>
    </div>

</div>


 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>


<?php /**PATH /var/www/dro.psypra.com/current/resources/views/specialists/show.blade.php ENDPATH**/ ?>