<div class="jumbotron text-center">

# Tool Tips

</div>

<div class="container">

<div class="row">

<div class="col-sm-4">

### Instruction Information:

• Each line is independent and self-contained, and may be blank, an instruction, or a storage directive  
• All delimiters are the space character  
• Instructions are for an accumulator machine  
(left argument and result are in an implicit accumulator ACC register, except for COPY),  
with the following format XXX arguments XXX is the reserved instruction name, required,  
in upper case arguments as needed separated by spaces additional optional label can start  
any instruction (label:), just one label per line at most instructions (# arguments, meaning)

ADD, DIV, MULT, WRITE, LOAD, SUB can take either variable or immediate value as the arg: immediate value is positive integer or negative integer

PUSH/POP are only means to reserve/delete automatic storage. STACKW/STACKR n - these are stack write/read instructions. n must be a non-negative number, and the access is to nth element down from TOS, top of stack NOTE: tos points to the topmost element on the stack Storage directives XXX val XXX is a name val is the initial value all storage and ACC size are signed 2 bytes Storage name and label are all names starting with latter and following with letters and digits up to eight total

</div>

<div class="col-sm-4">

### Instuctions:

<pre>• ADD (1, ACC = ACC +arg)</pre>

<pre> • BR (1, jump to arg)</pre>

<pre> • BRNEG (1, jump to arg if ACC < 0) </pre>

<pre> • BRZNEG (1, jump to arg if ACC <= 0) </pre>

<pre> • BRPOS (1, jump to arg if ACC > 0) </pre>

<pre> • BRZPOS (1, jump to arg if ACC >= 0)</pre>

<pre> • BRZERO (1, jump to arg if ACC == 0) </pre>

<pre> • COPY (2, arg1 = arg2) </pre>

<pre> • DIV (1, ACC = ACC / arg)</pre>

<pre> • MULT (1, ACC = ACC * arg)</pre>

</div>

<div class="col-sm-4">

<pre> • READ (1, arg=input integer)</pre>

<pre> • WRITE (1, put arg to output as integer)</pre>

<pre> • STOP (0, stop program) </pre>

<pre> • STORE (1, arg = ACC)</pre>

<pre> • SUB (1, ACC = ACC - arg)</pre>

<pre> • NOOP (0, nothing)</pre>

<pre> • LOAD (1, ACC=arg) </pre>

<pre> • PUSH (0, tos++)</pre>

<pre> • POP (0, tos–) </pre>

<pre> • STACKW (1,stack[tos-arg]=ACC) </pre>

<pre> • STACKR (1,ACC=stack[tos-arg])</pre>

</div>

</div>

</div>