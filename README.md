
<div align = center >

#  Connection Limit Demo

Simple demonstration of how limiting HTTP<2 is.

</div>

<br>

## How To

-   Install **[Deno]**

-   Start the server

    ```sh
    deno run dev
    ```

-   Open a browser at

    ```
    http://localhost:8000
    ```

<br>

## Description

Every iframe seen on the page has it's own kept  
alive connection to the server and updates the  
CSS inside itself to blink the background.

This visualization indicates the active connection.

Only 6 out of the 9 displayed iframes however  
should start blinking, as the miniscule connection  
limit keeps their requests in a pending state.

<br>

<!----------------------------------------------------------------------------->

[Blog]: https://jsless.deno.dev/blog/CSS-Event-Listeners-Sparks
[Demo]: https://jsless-demo-sparks.deno.dev/
[Deno]: https://deno.com/
