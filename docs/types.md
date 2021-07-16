# Types
Ass Blocks are strongly and statically typed, so types are very important here.

Types can extend 0 to many other types.

A type is automatically abstract if any of its procedures or properties are abstract.

That includes inherited procedures or properties.

There is only one type of type. No such thing as a Native Type or Custom Type or anything.

Each type also has a 32x32 icon that represents a pin of that type on a block.

Each type also has a color that is used for the connecting lines. It defaults to the average color of the provided icon but can be overridden.

Types can be instantiated if it has any non-global properties.

Instantiating can only be done inside the type's properties, so if you want other types to be able to instantiate, you'll need to make at least 1 constructor property. AKA a global property called "new" or something, that accepts parameters as needed, and returns the new instance.