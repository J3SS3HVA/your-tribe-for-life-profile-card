<script>
    export let data
  </script>
  
  <main>
    {#if data && data.persons && data.persons.length > 0}
      <h1>{data.persons[0].name}</h1>
      <h2>{data.persons[0].id}</h2>
    {/if}
  </main>