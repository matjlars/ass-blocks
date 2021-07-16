# Properties
Properties are like instance variables, getters, setters, and methods all combined into one concept.

Each property has a type and a name.

Properties automatically generate a backing store (an instance variable) if required by any of the property's signatures.

Properties can contain multiple signatures, which define the possible behaviours.

Each signature has 0-many inputs and 0-many outputs, and must be unique within each property.

For example, if a signature has 0 inputs and 1 output, that could be considered a "getter"

If a signature has 1 input and 0 outputs, that could be considered a "setter"

If a signature has 0 inputs and 0 outputs, that could be considered a method (or, procedure, since we're living in assembly land here)

Properties can be "global" which is similar to "static" in other languages. It essentially ties the property to the class rather than an object instance. That makes it globally available.

Properties can also be "final" which means they cannot be overridden in sub-types.

Properties are by default private but can be marked public to allow using them outside of the type's own properties.

"global" properties are automatically public.