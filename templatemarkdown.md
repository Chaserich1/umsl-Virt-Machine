<div class="jumbotron text-center">

# Example Templates

</div>

<div class="container">

<div class="row">

<div class="col-sm-4">

### sumOf3.asm reads 3 arguments and returns the sum using a stack  

<pre>READ X  
PUSH      
LOAD X    
STACKW 0 

READ X    
PUSH      
LOAD X     
STACKW 0

READ X  
STACKR 1 
ADD X     
STORE X  
STACKR 0 
ADD X   
STORE X   
WRITE X   
POP       
POP        
STOP      
X 0      

</pre>

</div>

<div class="col-sm-4">

### sum3nostack.asm Same as sumof3.asm but without a stack  

<pre>READ X     /*read arg1*/
READ Y     /*read arg2*/
READ Z     /*read arg3*/
LOAD X     /*ACC is arg1*/
ADD Y      /*add arg2 to the ACC*/
ADD Z      /*add arg3 to the ACC*/
STORE X    /*store the sum of the 3 integers*/
WRITE X    /*put sum to output as an integer*/
STOP       /*stop the program*/
X 0        /*arg1 is 0*/
Y 0        /*arg2 is 0*/
Z 0        /*arg3 is 0*/

</pre>

</div>

<div class="col-sm-4">

### sumOfAny.asm reads ﬁrst argument and the reads as many arguments as the ﬁrst argument and returns the sum

<pre>READ X        
COPY Z X       
LOOP1: LOAD X  
BRZERO OUT1  
BRNEG OUT1 
READ Y          
LOAD Y          
PUSH            
STACKW 0        
LOAD X         
SUB 1           
STORE X         
BR LOOP1          

OUT1: NOOP       

LOAD 0       
STORE Y    
LOOP2: STACKR 0 
ADD Y         
STORE Y    
POP       
LOAD Z       
SUB 1         
BRZERO OUT2   
BRNEG OUT2     
STORE Z         
BR LOOP2        
OUT2: NOOP    
WRITE Y        

STOP        
X 0            
Y 0          
Z 0             
</pre>

</div>

</div>

</div>
