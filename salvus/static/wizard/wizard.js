{"cython": {}, "gap": {}, "python": {"Language": {"Tutorial": {"01. Print": ["print \"Hello World\"", "The \"Hello World\" program"], "02. Variables": ["x = 1\ny = x + 1\nprint x\nprint y\n", "A variable is a name for an object. It is done via this syntax:\n``` variablename = object ```\n"], "03. Print Data": ["x = \"Hello\"\ny = 2.123456789\nprint \"%s World, y = %f\" %(x, y)\nprint \"x={x}, y={y:.3f}\".format(**locals())\n", "The \"Hello World\" program printing some values."], "04. Expressions": ["print (5 + 6) * 11\nz = 3\nprint (1 + z)**2\nfrom math import sqrt\nprint sqrt(z)\n", "Expressions are evaluated, they can consist of operators and function calls."], "05. Functions": ["def function1(x, y):\n    z = 10 * x + y\n    return z\n\nprint function1(4, 5)\nprint function1(1,-1)\n", "A function call is one of the most basic levels of abstraction. A common subroutine of evaluations is run with varying initial arguments. The `return` statement is very important: data flows back to where the functions has been called.\n"], "06. Data Structure: List": ["x = [42, \"Hello\", [1,2,3]]\nprint x\nx.append(\"World\")\nprint x", "To organize the information in a program, data structures come to help. A very basic one is an ordered collection of arbitrary objects.\n"]}}, "Numpy/Scipy": {"Intro": {"Numpy Basics": ["import numpy as np\nprint np, np.__version__\n", "[Numpy](http://docs.scipy.org/) is a library for numerical mathematics.\nIt is usually imported via `import numpy as np`.\n"]}}}, "r": {"Statistics": {"Modeling": {"Anova": ["TODO", "ANOVA of a linear model\n"], "Linear Model": ["lm(y ~ x)\n", "Linear Model Example"], "Nonlinear Model": ["lm(y ~ x)\n", "Nonlinear Model Example"]}}}, "sage": {"Algebra": {"Tutorial": {"01. How To Do X": ["def f(x):\n    return \"I want code\"\n", "This is some **markdown** enabled text with #hashtags.\n"], "02. How To Do Y": ["var(\"Y\")", "Some other _text_."]}}, "Plotting": {"2D": {"Cool 2D Plot": ["plot(x * sin(x), (x, -10, 10))", "Plot of $f(x) = x \\sin(x)$."], "Simple 2D Plot": ["plot(sin, (x, -10, 10))", "Plot of $\\sin$-function."]}, "3D": {"Simple 3D Plot": ["%var x, y\nplot3d(sin(x) * cos(y), (x, -10, 10), (y, -10, 10))\n", "Plot of $\\sin$-function."]}}}}