import {Ref, WatchSource, computed, shallowRef, watch} from 'vue';

/**
 * Create a ref that, can be independently updated, but when its default
 * value changes, it is restored to its (new) default value.
 *
 * Used for debugging.
 */
function useDefault<T>(defaultValue: WatchSource<T>): Ref<T> {
	const realRef = shallowRef<T>(typeof defaultValue === 'function' ? defaultValue() : defaultValue.value);

	watch<T>(
		defaultValue,
		(newValue) => {
			realRef.value = newValue;
		},
		{deep: true}
	);

	return computed({
		get() {
			return realRef.value as T; // 类型断言修复 @typescript-eslint/no-unsafe-return @typescript-eslint/no-unsafe-assignment by awajie
		},
		set(newValue) {
			realRef.value = newValue;
		},
	});
}

export default useDefault;
