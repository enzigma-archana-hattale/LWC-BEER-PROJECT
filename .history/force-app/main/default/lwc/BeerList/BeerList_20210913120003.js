<template>
    <div class="slds-m-around_small">
        <div>
            <c-beer-search onsearch={handleEvent} ></c-beer-search>
        </div>
        
        <div>
            <template if:true={beerRecords} >
                <div class="slds-grid slds-wrap">
                    <template for:each={beerRecords} for:item="item">
                            <div class="slds-col slds-size_1-of-3 " key={item.Id}>
                                <c-beer-tile beer-record={item}></c-beer-tile>
                            </div> 
                    </template>
                </div>
            </template>
            
        </div>
    </div>
</template>